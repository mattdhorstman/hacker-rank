function Node(data){
  this.data=data;
  this.next=null;
}

function Solution(){

this.insert=function(head,data){
        //complete this method
        if(!head){
            return new Node(data);
        } else {
            if(!head.next){
                const newNode = new Node(data);
                head.next = newNode;
                return head;
            }
            else {
                let tail = head;
                while(tail.next){
                  tail = tail.next;
                }
                tail.next = new Node(data);
                return head;
            }
        }
  };

this.display=function(head){
      var start=head;
          while(start){
              process.stdout.write(start.data+" ");
              start=start.next;
          }
  };
}

function main(){
  const n = 4;
  const sample = [2,3,4,1];
  
  let head=null;
  let mylist=new Solution();
  for(let i=0;i<n;i++){
      let data=sample.shift();
      head=mylist.insert(head,data);
  }
  mylist.display(head);
};

main();