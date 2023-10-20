import {setContact} from "../../helpers/api-util";

async function handler(req, res) {
  const data = req.body.data;
  if (!data) {
    return res.status(400).json({message: "Data is wrong"})
  }

  if (req.method === 'POST') {
    const newData = {
      _id: new Date().toISOString(),
      ...data,
    };
    try {
      const result = await setContact('portfolio', 'contact', newData);

      res.status(201).json({message: 'All done!', data: result});
    } catch (error) {
      return res.status(400).json({message: error.message})
    }

  }
}

export default handler;