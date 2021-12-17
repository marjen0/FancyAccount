import React, {useEffect} from 'react';
import {Text, View, Switch, ActivityIndicator} from 'react-native';
import {connect, MapDispatchToProps, ConnectedProps} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getUser} from '../../core/actions/user';
import {IRootState} from '../../core/store';
import {Screen, Avatar} from '../../components';
import {useTheme} from '../../context';
import {getStyles} from './styles';

interface IAccountScreenProps extends PropsFromRedux {}

const AccountScreen = ({
  address,
  firstName,
  lastName,
  phone,
  image,
  isLoading,
  getUserAction,
}: IAccountScreenProps) => {
  const {theme, isDark, setIsDark} = useTheme();
  const styles = getStyles(theme);

  useEffect(() => {
    getUserAction();
  }, [getUserAction]);

  const handleThemeToggle = () => {
    setIsDark(prevState => !prevState);
  };

  if (isLoading) {
    return <ActivityIndicator style={styles.container} />;
  }

  return (
    <Screen>
      <View style={styles.container}>
        <Avatar size="stretch" source={{uri: image}} />
        <Text style={styles.detailsText}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.detailsText}>{address}</Text>
        <Text style={styles.detailsText}>{phone}</Text>
      </View>
      <View style={styles.darkModeContainer}>
        <Text style={styles.darkModeText}>Dark Mode</Text>
        <Switch value={isDark} onChange={handleThemeToggle} />
      </View>
    </Screen>
  );
};

const mapStateToProps = (state: IRootState) => {
  const {address, firstName, lastName, phone, image, isLoading} = state.user;
  return {address, firstName, lastName, phone, image, isLoading};
};
const mapDispatchToProps = (dispatch: MapDispatchToProps<any, any>) => ({
  getUserAction: bindActionCreators(getUser, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AccountScreen);
