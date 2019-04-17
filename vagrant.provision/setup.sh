#!/bin/bash

echo "———————————————————————————————————"
echo "Provisioning VM…"

mkdir /vagrant/tmp/

echo "Updating environment"
apt-get update
apt-get upgrade -y
apt-get autoremove -y

echo "Setting hostname to: $VAGRANT_PROJECT_NAME-vb-box"
hostnamectl set-hostname "$VAGRANT_PROJECT_NAME-vb-box"

echo "Copying v-host template to apache available-sites"
cp /vagrant/vagrant.provision/config-template/apache-vhost-vb-box.conf /etc/apache2/sites-available/vb-box.conf
echo "Setting v-host url to: $VAGRANT_PROJECT_URL"
sed -i -e "s:INSERT_PROJECT_URL:$VAGRANT_PROJECT_URL:g" /etc/apache2/sites-available/vb-box.conf
echo "Setting v-host docroot: $VAGRANT_PROJECT_DOCROOT"
sed -i -e "s:INSERT_PROJECT_DOCROOT:$VAGRANT_PROJECT_DOCROOT:g" /etc/apache2/sites-available/vb-box.conf

echo "Copying local .env"
cp /vagrant/vagrant.provision/local/.env /vagrant/docroot/.env

echo "Intialising database"
cp /vagrant/vagrant.provision/database/init.sql /vagrant/tmp/init.sql
sed -i -e "s:INSERTDBNAME:$VAGRANT_DATABASE_NAME:g" /vagrant/tmp/init.sql
sed -i -e "s:INSERT_PROJECT_URL:$VAGRANT_PROJECT_URL:g" /vagrant/tmp/init.sql
mysql --host=localhost --user=$VAGRANT_DATABASE_USER --password=$VAGRANT_DATABASE_PW -f $VAGRANT_DATABASE_NAME < /vagrant/tmp/init.sql

echo "Restarting Apache"
service apache2 restart

echo "Installing dependencies using Composer"
cd /vagrant/craft/
composer install

rm -rf /vagrant/tmp/

echo "———————————————————————————————————"
echo "Provisioning done. Yay!"
