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
 *        "normalization_context"={"groups"={"tournee:read"}}
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
 * @ORM\Entity(repositoryClass="App\Repository\TourneeRepository")
 */
class Tournee
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"equipe:read", "tournee:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"equipe:read", "tournee:read", "rue:read"})
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Rue", mappedBy="tournee")
     * @Groups({"tournee:read"})
     */
    private $rues;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Equipe", inversedBy="tournees")
     * @ORM\JoinColumn(nullable=false)
     */
    private $equipe;

    public function __construct()
    {
        $this->rues = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?int
    {
        return $this->name;
    }

    public function setName(int $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Rue[]
     */
    public function getRues(): Collection
    {
        return $this->rues;
    }

    public function addRue(Rue $rue): self
    {
        if (!$this->rues->contains($rue)) {
            $this->rues[] = $rue;
            $rue->setTournee($this);
        }

        return $this;
    }

    public function removeRue(Rue $rue): self
    {
        if ($this->rues->contains($rue)) {
            $this->rues->removeElement($rue);
            // set the owning side to null (unless already changed)
            if ($rue->getTournee() === $this) {
                $rue->setTournee(null);
            }
        }

        return $this;
    }

    public function getEquipe(): ?Equipe
    {
        return $this->equipe;
    }

    public function setEquipe(?Equipe $equipe): self
    {
        $this->equipe = $equipe;

        return $this;
    }
}
