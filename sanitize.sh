# !/bin/bash
# **************** Change Variables Here ************
startdirectory="./lib/pokerogue"
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
      -e "/from \"phaser\"/d"\
      -e "/phaser3-rex-plugins/d"\
      -e "s/\#app/src/g"\
      -e "s/BBCodeText/any/g"\
      -e "s/InputText\.IConfig/any/g"\
      -e "s/InputText/any/g"\
      -e "s/Phaser\.Events\.EventEmitter/any/g"\
      -e "s/Phaser\.GameObjects\.TileSprite/any/g"\
      -e "s/Phaser\.GameObjects\.Rectangle/any/g"\
      -e "s/Phaser\.GameObjects\.Sprite/any/g"\
      -e "s/Phaser\.GameObjects\.Container/any/g"\
      -e "s/Phaser\.GameObjects\.Video/any/g"\
      -e "s/Phaser\.GameObjects\.Image/any/g"\
      -e "s/Phaser\.GameObjects\.NineSlice/any/g"\
      -e "s/Phaser\.GameObjects\.GameObject/any/g"\
      -e "s/Phaser\.GameObjects\.Text/any/g"\
      -e "s/Phaser\.Game/any/g"\
      -e "s/Phaser\.Loader\.LoaderPlugin/any/g"\
      -e "s/Phaser\.Renderer\.WebGL\.Pipelines/any/g"\
      -e "s/Phaser\.Renderer\.WebGL\.Wrappers\.WebGLTextureWrapper/any/g"\
      -e "s/Phaser\.Scene/any/g"\
      -e "s/Phaser\.Sound\.WebAudioSound/any/g"\
      -e "s/Phaser\.Sound\.HTML5AudioSound/any/g"\
      -e "s/Phaser\.Sound\.NoAudioSound/any/g"\
      -e "s/Phaser\.Textures\.Texture/any/g"\
      -e "s/Phaser\.Types\.Animations\.PlayAnimationConfig/any/g"\
      -e "s/Phaser\.Types\.GameObjects\.Text\.TextStyle/any/g"\
      -e "s/Phaser\.Types\.Renderer\.WebGL\.WebGLPipelineConfig/any/g"\
      -e "s/Phaser\.Types\.Sound\.SoundConfig/any/g"\
      -e "s/Phaser\.Types\.Scenes\.SettingsConfig/any/g"\
      -e "s/Phaser\.Types\.Time\.TimerEventConfig/any/g"\
      -e "s/Phaser\.Time\.Clock/any/g"\
      -e "s/Phaser\.Time\.TimerEvent/any/g"\
      -e "s/Phaser\.Tweens\.Tween/any/g"\
      -e "s/Phaser\.Input\.Gamepad\.Button/any/g"\
      -e "s/Phaser\.Input\.Gamepad\.Gamepad/any/g"\
      -e "s/extends any/ /g"\
      -e "s/\.js//g"\
      -e "s/src\/src\//src\//g"\
       $file

    let i++;
      echo "Modified: " $file
    done

echo " *** All Done! *** Modified files:" $i
