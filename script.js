 const timestamp = () => {
    let timeIndex = 1678166046264 / 1000;
    let random = Math.floor(Math.random() * 1000);
  
    return Math.round(timeIndex - random);
  };
  
const getStories = (data) => {
    try {
        console.log(data)
        const json = data;
        const slides = json.items.map(item => (
            {
                id: item.id, 
                photo: item.coverImageUrl,
                name: '',
                time: timestamp(),
                items: item.slides.map(slide => (
                    {
                        id: slide.id,
                        type: 'photo',
                        length:3,
                        src: slide.imageUrl,
                        preview: slide.imageUrl,
                        link: '',
                        linkText: false,
                        time: timestamp()
                    }
                ))
            }
        ))

        return slides
    }
    catch (error)
    {
        console.error(error);
        return []
    }
}

export default getStories
  

