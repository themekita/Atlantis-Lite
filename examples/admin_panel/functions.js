async function loadWeb3(){
    if(window.ethereum){
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }
}

async function loadContract() {
    
        return await new window.web3.eth.Contract([
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_user",
                "type": "address"
              }
            ],
            "name": "addAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "adminAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "hotspotAddress",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              }
            ],
            "name": "addHotspot",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
              }
            ],
            "name": "decreaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
              }
            ],
            "name": "increaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "adminAddress",
                "type": "address"
              }
            ],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_user",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "adminAddress",
                "type": "address"
              }
            ],
            "name": "blackList",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "adminAddress",
                "type": "address"
              }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "Paused",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_user",
                "type": "address"
              }
            ],
            "name": "removeAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_user",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "adminAddress",
                "type": "address"
              }
            ],
            "name": "removeFromBlacklist",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "adminAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "hotspotAddress",
                "type": "address"
              }
            ],
            "name": "removeHotspot",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "adminAddress",
                "type": "address"
              }
            ],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "Unpaused",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }
            ],
            "name": "allowance",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "decimals",
            "outputs": [
              {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "getHotspotMaxAddress",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              }
            ],
            "name": "getHotspotName",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "owner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "paused",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ], "0x9D346d16379d49d1F3dF3b874Ae68D2aAB83CFfA"
        )}

async function loadAll() {
  console.log("loading all");
  await loadWeb3();

  window.contract = await loadContract();
}

async function getCurrentAccount(){
	const accounts = await window.web3.eth.getAccounts();
	return accounts[0];
}

async function blacklistUser(userAddress) {
    const address = await getCurrentAccount();
    await window.contract.methods.blackList(userAddress, address).send({from:address});
}

async function removeFromBlacklist(userAddress) {
    const address = await getCurrentAccount();
    await window.contract.methods.removeFromBlacklist(userAddress, address).send({from:address});
}

async function pauseTransactions() {
    const address = await getCurrentAccount();
    await window.contract.methods.pause(address).send({from:address});
}

async function continueTransactions() {
    const address = await getCurrentAccount();
    await window.contract.methods.unpause(address).send({from:address});
}

async function mintSUCoin(amount) {
    mintAddress = "0xaD1464f2309aa0592ef486f37C067ee36c0b120a";
    const address = await getCurrentAccount();

    decimals = await window.contract.methods.decimals().call();
    mintAmount = amount * Math.pow(10, decimals);

    await window.contract.methods.mint(mintAddress, BigInt(mintAmount), address).send({from:address});
}

async function addAdmin(toAdd) {
    const address = await getCurrentAccount();
    await window.contract.methods.addAdmin(toAdd).send({from:address});
}

async function removeAdmin(toRemove) {
    const address = await getCurrentAccount();
    await window.contract.methods.removeAdmin(toRemove).send({from:address});
}

async function addHotspot(toAdd, name) {
    const address = await getCurrentAccount();
    await window.contract.methods.addHotspot(address, toAdd, name).send({from:address});
}

async function removeHotspot(toRemove) {
  const address = await getCurrentAccount();
  await window.contract.methods.removeHotspot(address, toRemove).send({from:address});
}

async function getMaxPayment(hotspotAddr) {
  const address = await getCurrentAccount();
  const name =  await window.contract.methods.getHotspotName(hotspotAddr).call();
  const customer = await window.contract.methods.getHotspotMaxAddress(hotspotAddr).call();
  const amount = await window.contract.methods.getHotspotMaxAmount(hotspotAddr).call();

  document.getElementById("hotspotName").innerHTML = 'Name: ' + name.toString();
  document.getElementById("hotspotMaxBuyer").innerHTML = 'Most spending customer: ' + customer;
  document.getElementById("hotspotMaxAmount").innerHTML = 'SUCoin spent: ' + amount;
}

async function getAccountBalance(newAddress) {
  const Http = new XMLHttpRequest();
  const url='https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x47b3e65B414898f4b31a5534f9dcC9B477212386&address=' + newAddress + '&tag=latest&apikey=YourApiKeyToken';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    response = JSON.parse(Http.responseText);
    document.getElementById("addressBalance").innerHTML = 'Balance: ' + response.result;
    console.log(Http.responseText)
  }
}

async function getAllHotspots() {
  // const address = await getCurrentAccount();
  // let addrList = await window.contract.methods.getHotspotAddressList(address).call();

  var new_table = document.createElement('table');
  new_table.className = 'table table-striped';

  var head = document.createElement('thead');
  var tableR = document.createElement('tr');

  var th1 = document.createElement('th');
  var text1 = document.createTextNode('Hotspot Name');
  th1.appendChild(text1);
  tableR.appendChild(th1);

  var th2 = document.createElement('th');
  var text2 = document.createTextNode('Address');
  th2.appendChild(text2);
  tableR.appendChild(th2);

  var th3 = document.createElement('th');
  var text3 = document.createTextNode('Best Customer');
  th3.appendChild(text3);
  tableR.appendChild(th3);

  var th4 = document.createElement('th');
  var text4 = document.createTextNode('Best Customer Spending');
  th4.appendChild(text4);
  tableR.appendChild(th4);

  head.appendChild(tableR);
  new_table.appendChild(head);

  

  var element = document.getElementById('hotspotList');
  element.appendChild(new_table);
  // for(i = 0; i < addrList.length; i++) {
  //   var tag = document.createElement("p");
  //   var text = document.createTextNode("Tutorix is the best e-learning platform");
  //   tag.appendChild(text);
  //   var element = document.getElementById("new");
  //   element.appendChild(tag);
  // }
}

function testFunc() {
  console.log('calling test function');
  var tag = document.createElement('p');
  var text = document.createTextNode('Tutorix is the best e-learning platform');
  tag.appendChild(text);
  var element = document.getElementById('hotspotList');
  element.appendChild(tag);
}