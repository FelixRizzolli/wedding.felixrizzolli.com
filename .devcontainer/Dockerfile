FROM mcr.microsoft.com/devcontainers/typescript-node:24

RUN echo "INSTALL KRAEUTERAKADEMIE DEVCONTAINER IMAGE" && \
    # Disable Bash's bracket paste mode
    echo "bind 'set enable-bracket-paste off'" >> ~/.bashrc && \
    # Allways show hidden files in ls and colorize the output
    echo "alias ls='ls -a --color=auto'" >> ~/.bashrc && \
    # Ensure that git reats /workspace as a safe directory to avoid permission-related issues.
    git config --global --add safe.directory /workspace && \
    # Install PostgreSQL
    apt-get update && \
    apt-get install curl ca-certificates -y && \
    install -d /usr/share/postgresql-common/pgdg && \
    curl -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc --fail https://www.postgresql.org/media/keys/ACCC4CF8.asc && \
    sh -c 'echo "deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list' && \
    apt-get update && \
    apt-get install postgresql -y && \
    # Install Terraform
    sudo apt-get update -y && sudo apt-get install -y gnupg software-properties-common curl unzip lsb-release && \
    curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list && \
    sudo apt-get update -y && sudo apt-get install -y terraform && \
    terraform -version

EXPOSE 3000
EXPOSE 1337