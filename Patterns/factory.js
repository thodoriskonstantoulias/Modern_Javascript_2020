//Factory Pattern
function MemberFactory(){
    this.createMember = function(name,type){
        let member;

        if (type === 'simple'){
            member = new SimpleMember(name);
        } else if (type === 'standard'){
            member = new StandardMember(name);
        }else if (type === 'super'){
            member = new SuperMember(name);
        }

        member.type = type;
        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }

        return member;
    }
}

const SimpleMember = function(name){
    this.name = name;
    this.cost = '5$';
}
const StandardMember = function(name){
    this.name = name;
    this.cost = '15$';
}
const SuperMember = function(name){
    this.name = name;
    this.cost = '45$';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('ted','simple'));

members.forEach(function(member){
    member.define();
});