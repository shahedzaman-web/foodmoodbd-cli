import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import FlatText from '../../components/FlatText';
import {RadioButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import i18n from './../../translation/index';
export default function ChangeLanguage({navigation}) {
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');
  const {t} = useTranslation();
  const handleChangeLanguageToEnglish = () => {
    setSelectedLanguage('en');
    i18n.changeLanguage('en');
  };
  const handleChangeLanguageToBangla = () => {
    setSelectedLanguage('bn');
    i18n.changeLanguage('bn');
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={24} color="#333333" />
          <FlatText text={t('back')} size={20} font="q_bold" color="#333333" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderTitle}>
            <FlatText
              text={t('changeLanguage')}
              font="extrabold"
              color="#333333"
              size={24}
              textalign="center"
            />
          </View>
          <View style={styles.gap} />
          <View style={styles.cardBody}>
            <FlatText
              text={t('languageChangeQuestion')}
              font="semibold"
              color="#333333"
              size={16}
              textalign="center"
            />
            <View style={styles.gap} />
            <View style={styles.row}>
              <FlatText text="English" font="semibold" color="#333333" size={16} />
              <RadioButton
                color="#C01C27"
                uncheckedColor="#333"
                value="en"
                status={selectedLanguage === 'en' ? 'checked' : 'unchecked'}
                onPress={handleChangeLanguageToEnglish}
              />
            </View>
            <View style={styles.row}>
              <FlatText text="বাংলা" font="semibold" color="#333333" size={16} />
              <RadioButton
                color="#C01C27"
                uncheckedColor="#333"
                value="bn"
                status={selectedLanguage === 'bn' ? 'checked' : 'unchecked'}
                onPress={handleChangeLanguageToBangla}
              />
            </View>
            <View style={styles.gap} />
            <View style={styles.gap} />
          </View>
        </View>
      </View>
    </View>
  );
}
