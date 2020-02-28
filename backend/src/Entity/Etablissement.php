<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     attributes={
 *        "security"="is_granted('ROLE_USER')",
 *        "normalization_context"={"groups"={"eta_get"}}
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
 * @ORM\Entity(repositoryClass="App\Repository\EtablissementRepository")
 */
class Etablissement
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"eta_get"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"eta_get"})
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"eta_get"})
     */
    private $code_regate;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Equipe", mappedBy="etablissement")
     * @Groups({"eta_get"})
     */
    private $equipes;

    public function __construct()
    {
        $this->equipes = new ArrayCollection();
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

    public function getCodeRegate(): ?int
    {
        return $this->code_regate;
    }

    public function setCodeRegate(int $code_regate): self
    {
        $this->code_regate = $code_regate;

        return $this;
    }

    public function getEquipe(): ?Equipe
    {
        return $this->equipe;
    }

    public function setEquipe(Equipe $equipe): self
    {
        $this->equipe = $equipe;

        // set the owning side of the relation if necessary
        if ($equipe->getEtablissement() !== $this) {
            $equipe->setEtablissement($this);
        }

        return $this;
    }

    /**
     * @return Collection|Equipe[]
     */
    public function getEquipes(): Collection
    {
        return $this->equipes;
    }

    public function addEquipe(Equipe $equipe): self
    {
        if (!$this->equipes->contains($equipe)) {
            $this->equipes[] = $equipe;
            $equipe->setEtablissement($this);
        }

        return $this;
    }

    public function removeEquipe(Equipe $equipe): self
    {
        if ($this->equipes->contains($equipe)) {
            $this->equipes->removeElement($equipe);
            // set the owning side to null (unless already changed)
            if ($equipe->getEtablissement() === $this) {
                $equipe->setEtablissement(null);
            }
        }

        return $this;
    }
}
