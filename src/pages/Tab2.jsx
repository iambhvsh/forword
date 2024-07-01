import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useRef } from 'react';
import { NoSearch } from '../components/NoSearch';
import { NoResultsWordCard, WordCard } from '../components/WordCard';
import { WordStore } from '../store';
import { searchWord } from '../utils';

const Tab2 = () => {
  const pageRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [animatedClass, setAnimatedClass] = useState("");

  const performSearch = async () => {
    setAnimatedClass("animate__slideOutRight");
    const result = searchTerm ? await searchWord(searchTerm) : null;

    setTimeout(() => {
      setSearchResult(result || "none");
      setAnimatedClass("animate__slideInLeft");
    }, 250);

    WordStore.update(s => { s.searchCount++ });
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  return (
    <IonPage ref={pageRef}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            animated
            value={searchTerm}
            onIonChange={e => setSearchTerm(e.detail.value)}
            onKeyDown={handleKeyDown}
          />
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="12">
              {searchResult !== null && (
                searchResult === "none" ? (
                  <NoResultsWordCard animatedClass={animatedClass} />
                ) : (
                  <WordCard word={searchResult} animatedClass={animatedClass} pageRef={pageRef} />
                )
              )}

              {!searchResult && <NoSearch />}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
