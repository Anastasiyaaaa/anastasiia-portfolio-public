// import {setContact} from "../../helpers/api-util";

async function handler(req, res) {
  const data = req.body.data;
  console.log(data)
  if (!data) {
    return res.status(400).json({message: "Data is wrong"})
  }

  if (req.method === 'POST') {
    // const newData = {
    //   _id: new Date().toISOString(),
    //   ...data,
    // };
    try {
      // free version of Vercel has limit time for responds, and it's not enough for mongodb
      // const result = await setContact('portfolio', 'contact', newData);

      const result = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_HOST}/contact.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      res.status(201).json({message: 'All done!', data: result});
    } catch (error) {
      return res.status(400).json({message: error.message})
    }
    console.log('time')
    console.timeLog();
  }
}

export default handler;