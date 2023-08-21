import { useFormik } from "formik";
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes, SignupValidationSchema } from "../../../constants";

export default useSignup = () => {
    const navigation = useNavigation();
    const navigateToSignIn = () => navigation.navigate(NavigationRoutes.login);
    const navigateGoBack = () => navigation.goBack();

    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
    };

    const onSubmit = () => {
        navigation.navigate(NavigationRoutes.signup2)
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignupValidationSchema,
        onSubmit: onSubmit
    });

    return {
        navigation,
        formik,
        navigateToSignIn,
        navigateGoBack
    };
};
