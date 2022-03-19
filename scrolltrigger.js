gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".a",
    start: "35px 40px",
    end: "500px 100px",
    onEnter: 
    function enter(){
        var a = document.getElementById('a');
        a.classList.add("mystyle");
        var c = document.getElementById('c');
        c.classList.remove("mystyle");
        var b = document.getElementById('b');
        b.classList.remove("mystyle");
    },
    onEnterBack: 
    function enter(){
        var a = document.getElementById('a');
        a.classList.add("mystyle");
        var c = document.getElementById('c');
        c.classList.remove("mystyle");
        var b = document.getElementById('b');
        b.classList.remove("mystyle");
    },
    // markers: true
});

ScrollTrigger.create({
    trigger: ".b",
    start: "top 10px",
    end: "10px 100px",
    onEnter: 
    function enter(){
        var b = document.getElementById('b');
        b.classList.add("mystyle");
        var c = document.getElementById('c');
        c.classList.remove("mystyle");
        var a = document.getElementById('a');
        a.classList.remove("mystyle");
    },
    onEnterBack:
    function enter(){
        var b = document.getElementById('b');
        b.classList.add("mystyle");
        var c = document.getElementById('c');
        c.classList.remove("mystyle");
        var a = document.getElementById('a');
        a.classList.remove("mystyle");
    },
    
    // markers: true
});


ScrollTrigger.create({
    trigger: ".c",
    start: "top 10px",
    end: "500px 100px",
    onEnter: 
    function enter(){
        var c = document.getElementById('c');
        c.classList.add("mystyle");
        var b = document.getElementById('b');
        b.classList.remove("mystyle");
        var a = document.getElementById('a');
        a.classList.remove("mystyle");
    },
    onEnterBack:
    function enter(){
        var c = document.getElementById('c');
        c.classList.add("mystyle");
        var b = document.getElementById('b');
        b.classList.remove("mystyle");
        var a = document.getElementById('a');
        a.classList.remove("mystyle");
    },
    // markers: true
});


// ScrollTrigger.create({
//     trigger: ".b",
//     start: "top center",
//     end: "top 300px",
//     onEnter: 
//         function enter(){
//             alert('bbbbb..............');
//         }
//     ,
//     // onLeave: leave(),
//     markers: true
// });