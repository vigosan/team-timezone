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

  getMembersGroupedByTz() {
    let members = this.getMembers();

    return members.reduce((acc, member) => {
      let key = member.tz;
      acc[key] = acc[key] || [];
      acc[key].push(member);
      return acc;
    }, {});
  },

  getSearchedMembers() {
    this.searchedMembers
  },

  fakeMembers(count=25) {
    for(let i of Array(count).keys()) {
      this.members.push({
        "id": `member-${i}@email.com`,
        "email": `member-${i}@email.com`,
        "name": `Member ${i}`,
        "avatar": `https://api.adorable.io/avatars/45/${i}`,
        "tz": [
          "Europe/Madrid",
          "Europe/London",
          "America/New_York",
          "Asia/Shanghai"
        ][Math.floor(Math.random()*4)]
      });
    }
  },

  init() {
    this.fakeMembers();
  }
};

TzAPI.init();
export default TzAPI;
