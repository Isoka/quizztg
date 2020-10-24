<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\RangeFilter;

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
 * @ApiFilter(RangeFilter::class, properties={"tournee.name"})
 * @ORM\Entity(repositoryClass="App\Repository\RueRepository")
 */
class Rue
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"rue:read", "tournee:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"rue:read", "tournee:read"})
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Tournee", inversedBy="rues")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"rue:read", "tournee:read"})
     */
    private $tournee;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"rue:read", "tournee:read"})
     */
    private $fullstreetname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"rue:read", "tournee:read"})
     */
    private $options;

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

    public function getFullstreetname(): ?string
    {
        return $this->fullstreetname;
    }

    public function setFullstreetname(string $full_street_name): self
    {
        $this->fullstreetname = $fullstreetname;

        return $this;
    }

    public function getOptions(): ?string
    {
        return $this->options;
    }

    public function setOptions(string $options): self
    {
        $this->options = $options;

        return $this;
    }
}
