const header = document.querySelecetor(".header");
const team = document.querySelecetor(".team");
const member = document.querySelecetor(".member");
const nude = document.querySelecetor(".nude");
const blue = document.querySelecetor(".blue");
const green = document.querySelecetor(".green");
const brown = document.querySelecetor(".brown");

const tl = new TimelineMax();

tl.fromTo(header,1,{ height:"0%" },{ height: "80%", ease:Power2.easeInOut})
.fromTo(header, 1.2,{ width: "100%"},{ width: "80%",ease:Power2.easeInOut });
