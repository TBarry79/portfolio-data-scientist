import project1_img from '../assets/K_TSNE_result.jpg';
import project2_img from '../assets/classif_.png';
import project3_img from '../assets/final_scoring.png';
import project4_img from '../assets/cloud.jpg';

const mywork_data = [
    {
        w_no: "1",
        w_name: "Segmentation des clients d'un site e-commerce",
        w_img: project1_img,
        w_desc: "J'ai analysé les comportements d'achat de 100 000 clients d'Olist...",
        w_tools: [
          "Clustering : K-means et DBSCAN",
          "Visualisation : Matplotlib et Seaborn",
          "Prétraitement : PCA et standardisation",
          "Analyse des clusters pour des insights exploitables"
        ],
        w_link: "https://github.com/TBarry79/DataScience-Projects/tree/main/Projet5_segmentezDesClientsDUnSiteECcommerce"
    },
    {
        w_no: "2",
        w_name: "Classification automatique des biens de consommation",
        w_img: project2_img,
        w_desc: "Développement d'un moteur de classification avec une précision de 95%...",
        w_tools: [
          "Textes : BERT et Word2Vec",
          "Images : ResNet pour la classification",
          "Analyse combinée des caractéristiques visuelles et textuelles"
        ],
        w_link: "https://github.com/TBarry79/DataScience-Projects/tree/main/Projet6_classifiezAutomatiquementDesBiensDeConsommation"
    },
    {
        w_no: "3",
        w_name: "Modèle de scoring pour la gestion du risque crédit",
        w_img: project3_img,
        w_desc: "Mise en place d'un modèle de scoring avancé pour réduire le taux de défaut de paiement...",
        w_tools: [
          "Modélisation : Python, scikit-learn",
          "Optimisation des hyperparamètres : GridSearchCV",
          "Déploiement avec Streamlit et Docker"
        ],
        w_link: "https://github.com/TBarry79/DataScience-Projects/tree/main/Projet7_implémentezUnModèleDeScoring"
    },
    {
        w_no: "4",
        w_name: "Déployez un Modèle dans le Cloud",
        w_img: project4_img,
        w_desc: "Déploiement d'une infrastructure Big Data sur AWS EMR...",
        w_tools: [
          "Infrastructure : AWS EMR pour la gestion des ressources Big Data",
          "Traitement de données : Pyspark pour le traitement distribué des images"
        ],
        w_link: "https://github.com/TBarry79/DataScience-Projects/tree/main/Projet8_déployezUnModèleDansLeCloud"
    }
];

export default mywork_data;
