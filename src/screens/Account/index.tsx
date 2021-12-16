import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect, MapDispatchToProps, ConnectedProps} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getUser} from '../../core/actions/user';
import {IUserState} from '../../core/reducers/user';
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
  getUserAction,
}: IAccountScreenProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  useEffect(() => {
    getUserAction();
  }, [getUserAction]);

  return (
    <Screen>
      <View style={styles.container}>
        <Avatar size="stretch" source={{uri: image}} />
        <Text style={styles.detailsText}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.detailsText}>{address}</Text>
        <Text style={styles.detailsText}>{phone}</Text>
      </View>
    </Screen>
  );
};

const mapStateToProps = (state: IUserState) => {
  const {address, firstName, lastName, phone, image} = state.user;
  return {address, firstName, lastName, phone, image};
};
const mapDispatchToProps = (dispatch: MapDispatchToProps<any, any>) => ({
  getUserAction: bindActionCreators(getUser, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AccountScreen);
