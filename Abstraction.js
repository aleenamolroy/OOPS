class Music{
    #loadsong(song){
        console.log(`Loading the song:${song}`)
    }
    #setvolume(level){
        console.log(`setting volume to level ${level}`);
        
    }
    play(song){
        this.#loadsong(song)
        this.#setvolume(5)
        console.log("Playing song");
        
    }

}
const player=new Music()
player.play("Music..")

