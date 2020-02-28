<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(
 *     attributes={
 *        "security"="is_granted('ROLE_USER')",
 *        "normalization_context"={"groups"={"equ_get"}}
 *     },
 *     collectionOperations={
 *         "get",
 *         "post"={"security"="is_granted('ROLE_ADMIN')"}
 *     },
 *     itemOperations={
 *         "get",
 *         "put"={"security"="is_granted('ROLE_ADMIN')"},
 *     }
 * )
 * 
 * @ORM\Entity(repositoryClass="App\Repository\EquipeRepository")
 */
class Equipe
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Tournee", mappedBy="equipe")
     */
    private $tournees;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etablissement", inversedBy="equipes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $etablissement;

    public function __construct()
    {
        $this->tournees = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Tournee[]
     */
    public function getTournees(): Collection
    {
        return $this->tournees;
    }

    public function addTournee(Tournee $tournee): self
    {
        if (!$this->tournees->contains($tournee)) {
            $this->tournees[] = $tournee;
            $tournee->setEquipe($this);
        }

        return $this;
    }

    public function removeTournee(Tournee $tournee): self
    {
        if ($this->tournees->contains($tournee)) {
            $this->tournees->removeElement($tournee);
            // set the owning side to null (unless already changed)
            if ($tournee->getEquipe() === $this) {
                $tournee->setEquipe(null);
            }
        }

        return $this;
    }

    public function getEtablissement(): ?Etablissement
    {
        return $this->etablissement;
    }

    public function setEtablissement(Etablissement $etablissement): self
    {
        $this->etablissement = $etablissement;

        return $this;
    }
}
