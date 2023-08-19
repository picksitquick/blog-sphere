"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Name from '../components/name';
import Header from '../components/header';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';
import Link from 'next/link';

export default function MediaCard() {
  return (
    <div>
    <Name/>
    <Header/>
    <div className='mr-36 ml-36'>
    <Typography gutterBottom variant="h6" component="div" className='text-slate-600 p-20 mr-20 ml-20'>
        This website was created as a part of the learning and training experience at GameDoora.
        Find more about our trainees here!
    </Typography>
    <div className='flex flex-row gap-20 ml-44'>
    <Card sx={{ maxWidth: 345 }} className='shadow-2xl'>
      <CardMedia
        sx={{ height: 350 }}
        image="employee1.png"
        title="sampada"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sampada Hirulkar
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small"><Link href={'https://www.google.com/search?client=safari&rls=en&q=github&ie=UTF-8&oe=UTF-8'}>GitHub</Link></Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className='shadow-2xl'>
      <CardMedia
        sx={{ height: 350 }}
        image="/employee2.png"
        title="anish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Anish Gore
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small"><Link href={'https://www.google.com/search?client=safari&rls=en&q=github&ie=UTF-8&oe=UTF-8'}>GitHub</Link></Button>
      </CardActions>
    </Card>
    </div>
    </div>
    <Newsletter/>
    <Footer/>
    </div>
  );
}