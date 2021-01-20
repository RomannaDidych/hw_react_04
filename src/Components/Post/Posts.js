import Post from './Post'


const MESSNER_AVATAR = "https://preview.thenewsmarket.com/Previews/FILA/StillAssets/640x480/542209.JPEG";
const MOUNT_IMAGE = "https://konkurent.ua/media/uploads/prev/2020/03/13/17/41/24/917a08ac722c69ee0b563286af46ec97.png";
const ARXIMED_AVATAR = 'https://aforisimo.ru/autors/%D0%90%D1%80%D1%85%D0%B8%D0%BC%D0%B5%D0%B4.jpg';
const ARXIMED_IMAGE = 'https://fs01.vseosvita.ua/010029i5-ba6e/001.jpg';

function Posts() {
  return (
    <div>
      <Post author={{
          photo: MESSNER_AVATAR,
          name: 'Reinhold Messner',
          nickname: "@messner"
        }}
        content = 'Mountaineering is a world without rules!'
        image = {MOUNT_IMAGE}
        date={"30 грудня"}
      />
      <Post author = {{
        photo: ARXIMED_AVATAR,
        name: 'Arximedus',
        nickname: '@arximedus'
      }} 
      content = {`Дайте мені точку опори, і я переверну світ!!!`}
      image = {ARXIMED_IMAGE}
      date = {'15 травня'}
      />
    </div>
  );
}

export default Posts;
