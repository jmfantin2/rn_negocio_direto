//NÃO MODIFIQUE OS IDs!!

const lists = {
  categories: [
    {
      id: 0,
      label: "Novilho",
      value: "novilho",
      can_be_castrated: true,
      can_be_registered: false,
      can_be_pregnant: false,
      can_have_children: false,
      complementary_categories: [
        { id: 1 }, //terneiro
        { id: 4 }, //novilha
      ],
    },
    {
      id: 1,
      label: "Terneiro",
      value: "terneiro",
      can_be_castrated: true,
      can_be_registered: false,
      can_be_pregnant: false,
      can_have_children: false,
      complementary_categories: [
        { id: 0 }, //novilho
        { id: 3 }, //terneira
      ],
    },
    {
      id: 2,
      name: "touro",
      label: "Touro",
      value: "touro",
      can_be_castrated: false,
      can_be_registered: true,
      can_be_pregnant: false,
      can_have_children: false,
      complementary_categories: null,
    },
    {
      id: 3,
      label: "Terneira",
      value: "terneira",
      can_be_castrated: false,
      can_be_registered: false,
      can_be_pregnant: false,
      can_have_children: false,
      complementary_categories: [
        { id: 1 }, //terneiro
        { id: 4 }, //novilha
      ],
    },
    {
      id: 4,
      label: "Novilha",
      value: "novilha",
      can_be_castrated: false,
      can_be_registered: false,
      can_be_pregnant: true,
      can_have_children: false,
      complementary_categories: [
        { id: 0 }, //novilho
        { id: 5 }, //vaca
      ],
    },
    {
      id: 5,
      label: "Vaca",
      value: "vaca",
      can_be_castrated: false,
      can_be_registered: false,
      can_be_pregnant: true,
      can_have_children: true,
      complementary_categories: [
        { id: 4 }, //novilha
      ],
    },
    {
      id: 6,
      label: "Vaca invernar",
      value: "vaca invernar",
      can_be_castrated: false,
      can_be_registered: false,
      can_be_pregnant: false,
      can_have_children: false,
      complementary_categories: null,
    },
  ],
};

export default lists;
