import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Skills() {
  const [selectedCard, setSelectedCard] = React.useState(0);
const cards = [
  { id: 1, title: 'HTML' },
  { id: 2, title: 'CSS' },
  { id: 3, title: 'Javascript' },
  { id: 4, title: 'React' },
  { id: 5, title: 'Redux' },
  { id: 6, title: 'TailwindCSS' },
  { id: 7, title: 'MUI' },
  { id: 8, title: 'Bootstrap' },
  { id: 9, title: 'Typescript' },
  { id: 10, title: 'Framer-motion' },
  { id: 11, title: 'Next.js' },
  { id: 12, title: 'GitHub' },
];
  useEffect(() => {
              AOS.init();
            }, [])
  return (
    <div id="services" className="w-full mb-10 mt-10 ms:mt-14 xl:px-0">
      <div data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="800" className="px-20 xl:px-12 nb:px-5">
        <h2
          className="font-bold pacifico-regular text-[30px] text-[#781727] text-center"
          
        >
          Мои знания и навыки
        </h2>
        <div className="flex justify-center sm:flex-col sm:items-center gap-4 mt-10 ms:mt-5">
          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
              gap: 2,
             
            }}
          >
            {cards.map((card, index) => (
              <Card key={card.id}>
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? '' : undefined}
                
                  sx={{
                    height: '100%',
                    '&[data-active]': {
                      backgroundColor: 'action.selected',
                      '&:hover': {
                        backgroundColor: 'action.selectedHover',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ height: '100%' }}
                    className='border-[#781727] border-2 rounded-md'>
                    <Typography
                      variant="h5"
                      component="div"
                      style={{ fontFamily: 'Playfair Display, serif',  fontSize: '18px', }}
                      
                    >
                      {card.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Skills;
