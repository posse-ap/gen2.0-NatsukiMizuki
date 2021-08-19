
document.getElementById('right1').addEventListener('click', () => {　　
   document.getElementById('answerbox1').style.display= "block";
    right1.className = "right1-after"
    mistake1.className = "mistake1-after"
    mistake2.className = "mistake2-after"
   });


document.getElementById('mistake1').addEventListener('click', () => {　　
    document.getElementById('bad-answerbox1').style.display= "block";
    document.getElementById('mistake1').style.backgroundColor = 'red';
    document.getElementById('mistake1').style.color = 'white';
    right1.className = "right1-after"
    mistake1.className = "mistake1-after"
    mistake2.className = "mistake2-after"
});

document.getElementById('mistake2').addEventListener('click', () => {　　
    document.getElementById('bad-answerbox1').style.display= "block";
    document.getElementById('mistake2').style.backgroundColor = 'red';
    document.getElementById('mistake2').style.color = 'white';
    right1.className = "right1-after"
    mistake1.className = "mistake1-after"
    mistake2.className = "mistake2-after"
});
