<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Equipe;
use App\Entity\Etablissement;
use App\DataFixtures\EtablissementFixtures;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;


class EquipeFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        for($i = 1;$i <= 5;$i++) {
          $equipe = New Equipe();
          $equipe->setName("Equipe ".$i);
          $equipe->setNumber($i);
          $equipe->setEtablissement($this->getReference('eta_toul_nord'));
          $this->addReference('eta_toul_nord_'.$i, $equipe);

          $manager->persist($equipe);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            EtablissementFixtures::class,
        );
    }
}
