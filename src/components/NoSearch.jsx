import { IonCol, IonLabel, IonRow } from "@ionic/react";

export const NoSearch = () => (
    <div style={{
        height: '100vh',  // Set height of the container to full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <IonRow className="ion-text-center">
            <IonCol size="10">
                <IonLabel>
                    <h2>Search for a word in the English language</h2>
                    <p>This app will give you word meanings, phonetics, origin, and also an audio clip so you can hear what it sounds like.</p>
                </IonLabel>
            </IonCol>
        </IonRow>
    </div>
);
