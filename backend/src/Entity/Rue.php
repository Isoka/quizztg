<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     attributes={
 *        "security"="is_granted('ROLE_USER')",
 *        "normalization_context"={"groups"={"rue:read"}}
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
 * @ORM\Entity(repositoryClass="App\Repository\RueRepository")
 */
class Rue
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"rue:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"rue:read"})
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Tournee", inversedBy="rues")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"rue:read"})
     */
    private $tournee;

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

    public function getTournee(): ?Tournee
    {
        return $this->tournee;
    }

    public function setTournee(?Tournee $tournee): self
    {
        $this->tournee = $tournee;

        return $this;
    }
}
