How to undo - installed curl and nodejs without using homebrew.

- Remove them and install nodejs and curl from homebrew.

```cmd

sudo rm -rf ~/.npm ~/.nvm ~/node_modules ~/.node-gyp ~/.npmrc ~/.node_repl_history
sudo rm -rf /usr/local/bin/npm /usr/local/bin/node-debug /usr/local/bin/node /usr/local/bin/node-gyp
sudo rm -rf /usr/local/share/man/man1/node* /usr/local/share/man/man1/npm*
sudo rm -rf /usr/local/include/node /usr/local/include/node_modules
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /usr/local/lib/dtrace/node.d
sudo rm -rf /opt/local/include/node /opt/local/bin/node /opt/local/lib/node
sudo rm -rf /usr/local/share/doc/node
sudo rm -rf /usr/local/share/systemtap/tapset/node.stp

brew uninstall node
brew doctor
brew cleanup --prune-pref

```

```cmd

brew install node
brew install yarn

yarn create vite
project-name
cd project-name
yarn
yarn dev

```

```cmd

Get-ExecutionPolicy -List
Get-ExecutionPolicy -Scope CurrentUser
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

```

```cmd
npm create vite@latest my-react-app --template react
```

### Readings

- [Getting started] (https://react.dev/learn)
