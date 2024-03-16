export function CloudButton(){

  const myWidget = cloudinary.createUploadWidget({
    cloudName: 'dlosqugku', 
    uploadPreset: 'hi3hlojn'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        //add state change funcs here using result info 
      }
    }
  )

  const openWidget = (event) => {
    console.log("test");
    myWidget.open();
  } 
return (
  <button onClick={openWidget} type="submit" className={`Cloud`}>
  Upload Image
  </button>
)
}