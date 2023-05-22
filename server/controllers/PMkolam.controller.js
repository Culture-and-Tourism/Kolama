import PMKolam from '../models/PMkolam.model.js'

export const createPMKolam = (req, res) => {
  const pmkolam = new PMKolam(req.body);

  pmkolam
    .save()
    .then(() => {
      res.status(201).send(pmkolam);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

export const getPMKolam = (req, res) => {
  PMKolam.find()
    .then((pmkolam) => {
      res.send(pmkolam);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// const getPMKolamById = (req, res) => {
//   const id = req.params.id;

//   PMKolam.findById(id)
//     .then((pmkolam) => {
//       if (!pmkolam) {
//         return res.status(404).send();
//       }

//       res.send(pmkolam);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

export const getPMKolamById = (req, res) => {
 PMKolam.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ noCartfound: "No Cart found" }));
}





export const updatePMKolam = (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  PMKolam.findByIdAndUpdate(id, updates, { new: true })
    .then((pmkolam) => {
      if (!pmkolam) {
        return res.status(404).send();
      }

      res.send(pmkolam);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};


export const deletePMKolam = (req, res) => {
  const id = req.params.id;

PMKolam.findByIdAndDelete(id)
    .then((pmkolam) => {
      if (!pmkolam) {
        return res.status(404).send();
      }

      res.send(pmkolam);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

