import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { bookOutline, heart, search } from 'ionicons/icons';
import { useStoreState } from 'pullstate';
import { useRef } from 'react';
import { WordStore } from '../store';
import { getFavourites, getSearchCount } from '../store/Selectors';

const Tab1 = () => {

  const pageRef = useRef();
  const favourites = useStoreState(WordStore, getFavourites);
  const searchCount = useStoreState(WordStore, getSearchCount);

  return (
    <IonPage ref={ pageRef }>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonGrid>
          <IonRow className={ `animate__animated animate__faster animate__fadeIn` }>
            <IonCol size="12">
              <IonCard>
                <IonCardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
  <IonIcon icon={bookOutline} color="primary" style={{ fontSize: '2rem', marginBottom: '0.5rem' }} />
  <IonCardTitle style={{ marginBottom: '0.5rem' }}>ForWord</IonCardTitle>
  <p style={{ marginBottom: 0 }}>A dictionary based on English language.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        
          <IonRow className={ `animate__animated animate__faster animate__fadeIn` }>
            <IonCol size="12">
              <IonCard>
                <IonCardContent>
                  <IonCardTitle>Did you know?</IonCardTitle>
                  <p>There are around Million words in the English language!</p>
                  <IonButton expand="block" className="ion-margin-top" routerLink="/search" style={{ display: 'flex', alignItems: 'center' }}>
  Search now
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ marginLeft: '5px' }}>
    <path d="M10 6l6 6-6 6"/>
  </svg>
</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className={ `animate__animated animate__faster animate__fadeIn` }>
            <IonCol size="6">
              <IonCard routerLink="/favourites">
                <IonCardContent className="ion-text-center">
                  <IonIcon icon={ heart } color="primary" />
                  <IonCardTitle>{ favourites.length }</IonCardTitle>
                  <IonCardSubtitle>Favourites</IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard routerLink="/favourites">
                <IonCardContent className="ion-text-center">
                  <IonIcon icon={ search } color="primary" />
                  <IonCardTitle>{ searchCount }</IonCardTitle>
                  <IonCardSubtitle>Searches</IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
