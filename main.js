
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="battlefield1.png";
background_image_array=["battlefield1.png","Battlefield2.png","Battlefeild3.png","Battlefeild4.jpg"];
random=Math.floor(Math.random()*4);
background_image=background_image_array[random];
console.log(background_image)

Naruto_img="NarutoRasengan.png"
enemy_image_array=["Madara.png","Kakuza.png","Sasuke.png","Kurama.png"];
enemy_img=enemy_image_array[random];
enemyx=400;
enemyy=650;
Naruto_width=100;
Naruto_height=150;
Naruto_x=10;
Naruto_y=650;
weapon_x=Naruto_x+40;
weapon_y=Naruto_y+70;
function background_img_show(){
bg_tag=new Image();
bg_tag.onload=upload_bg;
bg_tag.src=background_image;

Naruto_tag=new Image();
Naruto_tag.onload=upload_Naruto;
Naruto_tag.src=Naruto_img;

Enemy_tag=new Image();
Enemy_tag.onload=upload_Enemy;
Enemy_tag.src=enemy_img;

naruto_weapon_tag=new Image();
naruto_weapon_tag.onload=upload_naruto_weapon;
naruto_weapon_tag.src="Rasenshuriken.png";
}
function upload_bg(){
    ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height);
    
}
function upload_Naruto(){
    ctx.drawImage(Naruto_tag,Naruto_x,Naruto_y,Naruto_width,Naruto_height);
}
function upload_Enemy(){
    ctx.drawImage(Enemy_tag,enemyx,enemyy,Naruto_width,Naruto_height);
}
function upload_naruto_weapon(){
    ctx.drawImage(naruto_weapon_tag,weapon_x,weapon_y,100,100);
}

//first Class//
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    key_code=e.keyCode;
    console.log(key_code)
    if(key_code==40){
        Down();
        console.log("pressed down");
    }
    if(key_code==37){
        Left();
        console.log("pressed down");
    }
    
    if(key_code==38){
        Up();
        console.log("pressed down");
    }
    if(key_code==39){
        Right()
        console.log("pressed down")
    } 
    if(key_code==65){
        e_left()
        console.log("pressed a")
    } 
    if(key_code==83){
        e_Down()
        console.log("pressed s")
    } 
    if(key_code==68){
        e_right()
        console.log("pressed d")
    } 
    if(key_code==87){
        e_up()
        console.log("pressed w")
    } 
if(key_code==32){
    Move_Weapon();
}
}
function Down(){
    if(Naruto_y<=625){
    Naruto_y=Naruto_y+10;
    weapon_y=weapon_y+10;
    upload_bg()
    upload_Naruto()
    upload_Enemy()
    upload_naruto_weapon()
    weapon_collide()
    }
}
function Up(){
    if(Naruto_y>=10){
    Naruto_y=Naruto_y-10;
    weapon_y=weapon_y-10;
    upload_bg()
    upload_Naruto()
    upload_Enemy()
    upload_naruto_weapon()
    weapon_collide()
    }
}
    function Left(){
        if(Naruto_x>=10){
        Naruto_x=Naruto_x-10;
        weapon_x=weapon_x-10;
        upload_bg()
        upload_Naruto()
        upload_Enemy()
        upload_naruto_weapon()
        weapon_collide()
        }
    }
    function Right(){
        if(Naruto_x<=775){
        Naruto_x=Naruto_x+10;
        weapon_x=weapon_x+10;
        upload_bg()
        upload_Naruto()
        upload_Enemy()
        upload_naruto_weapon()
        weapon_collide()
        }
    }
        function e_right(){
            if(enemyx<=775){
            enemyx=enemyx+10;
            upload_bg()
            upload_Naruto()
            upload_Enemy()
            upload_naruto_weapon()
            weapon_collide()
            }
    }
    function e_up(){
        if(enemyy>=20){
        enemyy=enemyy-10;
        upload_bg()
        upload_Naruto()
        upload_Enemy()
        upload_naruto_weapon()
        weapon_collide()
        }
}
function e_Down(){
    if(enemyy<=625){
    enemyy=enemyy+10;
    upload_bg()
    upload_Naruto()
    upload_Enemy()
    upload_naruto_weapon()
    weapon_collide()
    }
}
function e_left(){
    if(enemyx>=10){
    enemyx=enemyx-10;
    upload_bg()
    upload_Naruto()
    upload_Enemy()
    upload_naruto_weapon()
    weapon_collide()
    }
}

function Move_Weapon(){
    if(weapon_x>=900){
        weapon_x=Naruto_x+40;
        weapon_y=Naruto_y+70
    }
        weapon_x=weapon_x+15;
        upload_bg()
    upload_Naruto()
    upload_Enemy()
    upload_naruto_weapon()
    weapon_collide()
    
   
}
function weapon_collide(){
    if(weapon_x>=enemyx && weapon_x<=enemyx+Naruto_width){
        if(weapon_y>=enemyy && weapon_y<=enemyy+Naruto_height){
            Naruto_height=150;
            Naruto_width=150;
            weapon_x=Naruto_x+40;
            weapon_y=Naruto_y+70
            upload_bg()
        upload_Naruto()
        upload_naruto_weapon()
        document.getElementById("myCanvas").style.visibility="hidden";
        
        }
    }
}