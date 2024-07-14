# !/bin/bash
# **************** Change Variables Here ************
startdirectory="./src/pokerogue"
searchterm="test"
replaceterm="test=ok!"
# **********************************************************

echo "***************************************************"
echo "* Search and Replace in Files Version 01-Aug-2012 *"
echo "***************************************************"

i=0; 

  for file in $(find $startdirectory -name '*.ts')
    do
      sed -i\
      -e "s/integer/number/g"\
      -e "/import Phaser/d"\
      -e "s/\#app/\.\./g"\
      -e "s/Phaser\.Events\.EventEmitter/any/g"\
      -e "s/Phaser\.GameObjects\.TileSprite/any/g"\
      -e "s/Phaser\.GameObjects\.Rectangle/any/g"\
      -e "s/Phaser\.GameObjects\.Sprite/any/g"\
      -e "s/Phaser\.GameObjects\.Container/any/g"\
      -e "s/Phaser\.GameObjects\.Video/any/g"\
      -e "s/Phaser\.GameObjects\.Image/any/g"\
      -e "s/Phaser\.GameObjects\.GameObject/any/g"\
      -e "s/Phaser\.Textures\.Texture/any/g"\
      -e "s/Phaser\.Types\.Sound\.SoundConfig/any/g"\
      -e "s/Phaser\.Input\.Gamepad\.Button/any/g"\
      -e "s/Phaser\.Input\.Gamepad\.Gamepad/any/g"\
      -e "s/Phaser\.Sound\.WebAudioSound/any/g"\
      -e "s/Phaser\.Sound\.HTML5AudioSound/any/g"\
      -e "s/Phaser\.Sound\.NoAudioSound/any/g"\
       $file

    let i++;
      echo "Modified: " $file
    done

echo " *** All Done! *** Modified files:" $i
