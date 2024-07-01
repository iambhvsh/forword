import { IonCol, IonLabel, IonRow } from "@ionic/react";

const centerStyle = {
  textAlign: 'center',
  width: 'full',
  marginTop: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const NoSearch = () => (
  <div style={centerStyle}>
    <IonRow>
      <IonCol size="10">
        <IonLabel>
          <h2>Search for a word in the English language</h2>
          <p>This app will give you word meanings, phonetics, origin, and also an audio clip so you can hear what it sounds like.</p>
        </IonLabel>
      </IonCol>
    </IonRow>
  </div>
);
