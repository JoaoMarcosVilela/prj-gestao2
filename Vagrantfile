# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  
  config.vm.box = "ubuntu/jammy64"
  
  # Configuração da VM1
  config.vm.define :vm1 do |vm1|
    vm1.vm.network :private_network, :ip => "192.168.56.10"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
    vm1.vm.provision "shell", inline: <<-SHELL
      apt-get update
      apt-get install -y curl
    SHELL
  end

# Configuração da VM2
  config.vm.define :vm2 do |vm2|
    vm2.vm.network :private_network, :ip => "192.168.56.11"
    
    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
    end

    vm2.vm.synced_folder ".", "/vagrant"
    
    vm2.vm.provision "shell", inline: <<-SHELL
      # Atualizar repositórios e instalar dependências
      sudo apt-get update
      curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
      sudo apt-get install -y nodejs
      sudo apt install -y docker.io

      # Iniciar e habilitar o Docker
      sudo systemctl start docker
      sudo systemctl enable docker

      # Baixar e rodar o MongoDB no Docker
      sudo docker run --name mongodb -d -p 27017:27017 mongo:4.4

      # Aguardar o MongoDB estar completamente disponível
      echo "Aguardando MongoDB iniciar..."
      until sudo docker exec mongodb mongo --eval "db.runCommand({ connectionStatus: 1 })" | grep -q 'ok'; do
        echo "MongoDB não está pronto, aguardando..."
        sleep 5
      done

      echo "MongoDB pronto para uso."

      # Inserir dados no MongoDB
      echo "Inserindo dados no MongoDB..."
      sudo docker exec mongodb mongo --eval '
        db = db.getSiblingDB("banco");
        db.filmes.insertMany([
          { nome: "O Senhor dos Anéis" },
          { nome: "Star Wars" },
          { nome: "Harry Potter" },
          { nome: "Matrix" }
        ]);
      '

      # Rodar a aplicação Node.js (certifique-se de que o código está na pasta /vagrant)
      cd /vagrant
      sudo npm install  # Instalar dependências
      npm start  # Rodar a aplicação com o script start
    SHELL
  end

  # Configuração do provedor VirtualBox (geral)
  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
  end
  
end
