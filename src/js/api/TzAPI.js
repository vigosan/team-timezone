const TzAPI = {
  members: [],
  searchedMembers: [],

  findSearchedMember(member) {
    return this.searchedMembers.find(
      searchedMember => searchedMember.id === member.id
    );
  },

  removeSearchedMember(member) {
    this.searchedMembers.splice(
      this.searchedMembers.findIndex(i => i === member)
  , 1);
  },

  addSearchedMember(member) {
    const searchedMember = this.findSearchedMember(member);
    if(searchedMember) { return; }
    this.searchedMembers.push(
      Object.assign({ isBeingSearched: true }, member)
    );
  },

  getMembers() {
    return this.members.map(member => {
      return Object.assign({}, member, this.searchedMembers.find(searchedMember => searchedMember.id === member.id)
      );
    });
  },

  fakeMembers(count=10) {
    for(let i = 1; i <= count; i++) {
      this.members.push({
        "id": `member-${i}@email.com`,
        "email": `member-${i}@email.com`,
        "name": `Member ${i}`,
        "avatar": `https://api.adorable.io/avatars/45/${i}`,
        "tz": ["Europe/Madrid", "America/New_York", "Europe/London"][Math.floor(Math.random()*3)]
      });
    }
  },

  init() {
    this.fakeMembers()
  }
}

TzAPI.init();
export default TzAPI;
