// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract CustomNamespace is Ownable {
    mapping(string => address) public namespaceOwners;
    mapping(address => string[]) public ownedNamespaces;
    uint256 public registrationFee;

    event NamespaceRegistered(string name, address owner);
    event NamespaceTransferred(string name, address from, address to);

    constructor(uint256 _registrationFee) Ownable(msg.sender) {
        registrationFee = _registrationFee;
    }

    function registerNamespace(string memory name) public payable {
        require(msg.value >= registrationFee, "Insufficient fee");
        require(
            namespaceOwners[name] == address(0),
            "Namespace already registered"
        );
        require(bytes(name).length > 0, "Name cannot be empty");

        namespaceOwners[name] = msg.sender;
        ownedNamespaces[msg.sender].push(name);

        emit NamespaceRegistered(name, msg.sender);
    }

    function transferNamespace(string memory name, address to) public {
        require(namespaceOwners[name] == msg.sender, "Not the owner");
        require(to != address(0), "Invalid recipient");

        namespaceOwners[name] = to;
        removeFromOwnedNamespaces(msg.sender, name);
        ownedNamespaces[to].push(name);

        emit NamespaceTransferred(name, msg.sender, to);
    }

    function getNamespaceOwner(
        string memory name
    ) public view returns (address) {
        return namespaceOwners[name];
    }

    function getOwnedNamespaces(
        address owner
    ) public view returns (string[] memory) {
        return ownedNamespaces[owner];
    }

    function setRegistrationFee(uint256 _newFee) public onlyOwner {
        registrationFee = _newFee;
    }

    function withdrawFees() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function removeFromOwnedNamespaces(
        address owner,
        string memory name
    ) private {
        string[] storage namespaces = ownedNamespaces[owner];
        for (uint i = 0; i < namespaces.length; i++) {
            if (Strings.equal(namespaces[i], name)) {
                namespaces[i] = namespaces[namespaces.length - 1];
                namespaces.pop();
                break;
            }
        }
    }
}
