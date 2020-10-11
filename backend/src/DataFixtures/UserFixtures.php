<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        $user = New User;
        $user->setEmail('isoka33@gmail.com');
        $user->setPassword('$argon2i$v=19$m=65536,t=4,p=1$ajh5ZWVkaEd0L05SWFBxRg$mZQnewaJGrVd3PmZIuq5nR6XSwNHjhjMQxKYyUEEmxU');
        $user->setRoles(["ROLE_ADMIN"]);
        $user->setFirstname('Thomas');
        $user->setLastname('BALANS');

        $manager->persist($user);
        $manager->flush();
    }
}
