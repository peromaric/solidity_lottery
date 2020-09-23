LOTTERY PROJECT PRACTICE:

Building a small lottery - participants enter with a designated
amount of ether, and the lottery distributes the entire pool to
one randomly selected participant.

.sol contract description:
Constructor uses the address of the account deploying and sets
the "manager" address - he will later tell the contract to 
distribute pooled ether.
Variable players stores the addresses of the participants,
done via enter() public payable{}
For random number generator the following is used:
uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
The contract needs to be able to revert to original state after
the winner has been decided, so that another lottery can begin anew,
this is done by players = new address payable[](0); (emptying the players array).
Pick winner needs to be publically visible, but so that only the manager can
call it, so require(msg.sender == manager); is placed in pickWinner function.
However, what if another require(msg.sender == manager); is needed later in the code?
To prevent duplicates modifier functions are used --> modifier restricted(){}
which contains the require(msg.sender == manager); and _; after that.