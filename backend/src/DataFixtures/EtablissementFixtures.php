<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Etablissement;

class EtablissementFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $etablissement = New Etablissement();
        $etablissement->setName('TOULOUSE NORD');
        $etablissement->SetCodeRegate(315870);
        $this->addReference('eta_toul_nord', $etablissement);
        $manager->persist($etablissement);
        $manager->flush();
    }
}
