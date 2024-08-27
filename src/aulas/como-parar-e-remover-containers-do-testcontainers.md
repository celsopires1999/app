```bash
docker stop $(docker ps -q --filter "label=org.testcontainers=true")
```

# Como criar um alias quando se usa o Oh My Zsh

```bash
touch $ZSH_CUSTOM/aliases.zsh
nano $ZSH_CUSTOM/aliases.zsh
alias dockerstoptest='docker stop $(docker ps -q --filter "label=org.testcontainers=true")'
source $ZSH_CUSTOM/aliases.zsh
```
