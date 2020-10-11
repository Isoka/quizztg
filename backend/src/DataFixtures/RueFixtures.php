<?php

namespace App\DataFixtures;

use App\Entity\Rue;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\TourneeFixtures;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class RueFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        
        $fichier = file_get_contents(__DIR__.'/data.json');
        $rues = json_decode($fichier, true);
        $nbRues = count($rues) - 1;

        for($i = 0; $i <= $nbRues; $i++) {
          
          $rue = New Rue();
          $rue->setTournee($this->getReference('eta_toul_nord_tour_'.$rues[$i]['tournee']));
          $rue->setName($rues[$i]['streetName']);
          $rue->setFullstreetname($rues[$i]['fullStreetName']);

          if(isset($rues[$i]['options']) && $rues[$i]['options'] !== NULL) {

            $rue->setOptions($rues[$i]['options']);
          }

          $manager->persist($rue);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            TourneeFixtures::class,
        );
    }
}
