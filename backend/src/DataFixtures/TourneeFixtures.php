<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Tournee;
use App\DataFixtures\EquipeFixtures;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class TourneeFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
      for ($i = 1;$i <= 5;$i++) {
        for($ie = 1;$ie <= 9;$ie++) {
          $tournee = New Tournee();
          $tournee->setEquipe($this->getReference('eta_toul_nord_'.$i));
          $tournee->setName("52".$i.$ie);
          $this->addReference('eta_toul_nord_tour_52'.$i.$ie, $tournee);
          $manager->persist($tournee);
        }
      }

      $tournee = New Tournee();
      $tournee->setEquipe($this->getReference('eta_toul_nord_2'));
      $tournee->setName("5220");
      $this->addReference('eta_toul_nord_tour_5220', $tournee);
      $manager->persist($tournee);

      $tournee = New Tournee();
      $tournee->setEquipe($this->getReference('eta_toul_nord_3'));
      $tournee->setName("5230");
      $this->addReference('eta_toul_nord_tour_5230', $tournee);
      $manager->persist($tournee);

      $tournee = New Tournee();
      $tournee->setEquipe($this->getReference('eta_toul_nord_5'));
      $tournee->setName("5250");
      $this->addReference('eta_toul_nord_tour_5250', $tournee);
      $manager->persist($tournee);

      $tournee = New Tournee();
      $tournee->setEquipe($this->getReference('eta_toul_nord_5'));
      $tournee->setName("5260");
      $this->addReference('eta_toul_nord_tour_5260', $tournee);
      $manager->persist($tournee);

      $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            EquipeFixtures::class,
        );
    }
}
