/**
 * 
 * Manage the content of the sign up page (password section)
 * 
 **/

import { Title } from './../../../assets/components/Title.jsx';
import { Input, Button, Notice, Mark, FlexContainer, CheckBox, setInputState } from './../../../assets/components/CustomElements.jsx';
import { InputFieldsContainer, clientDataCheck, nextCheck, redoRegister } from './../register.jsx';
import { onMount } from "solid-js";
import { useNavigate } from '@solidjs/router';
import { registerData, checkDataByOrder, hash, loadAES } from './../../../assets/scripts/pages/registerData.jsx';

export default function RegisterPassword(props){
    let navigate = useNavigate(),
        updateButton,
        nextButton, password, passwordConfirm, usernameHiddenInput;
    onMount(() => {
        updateButton = clientDataCheck(nextButton, "password", "password_confirm");
        usernameHiddenInput.value = registerData.username;
    });
    props.report();
    return <>
        <Title>Sign Up</Title>
        <h1>Choose a password!</h1>
        <br/>
        <h3>Choose a <Mark>secure password</Mark> for your account!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <input ref={usernameHiddenInput} id={"username-hidden"} type={"username"} style={"display: none;"} value={"TestUsername"}/>
            <InputFieldsContainer>
                <Input ref={password} id={"password"} type={"password"} label={"Password"} autocomplete={"off"}
                        style={{width: "calc(100% - 8px)"}}/>
                <Input ref={passwordConfirm} id={"password_confirm"} type={"password"} label={"Confirmation"} autocomplete={"off"}
                        style={{width: "calc(100% - 8px)"}}/>
                <CheckBox id={"showPassword"} label={"Show password"}
                            style={{"margin": "8px", "margin-right": "auto"}}
                            checked={false}
                            onActive={function(){
                                document.getElementById("password").type = "text";
                                document.getElementById("password_confirm").type = "text";
                            }}
                            onInactive={function(){
                                document.getElementById("password").type = "password";
                                document.getElementById("password_confirm").type = "password";
                            }}
                        />
            </InputFieldsContainer>
            <Notice>The password must be at least 10 characters long, with a mix of letters and numbers! (Note that it's recommended to mix in a few special characters)</Notice>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"action"} function={function(){history.back()}}>Go back</Button>
                <Button ref={nextButton} type={"action"} function={function(){
                    nextCheck(nextButton, function(setError, isDone){
                        let passwordInput = password.children[0].children[0],
                            passwordConfirmInput = passwordConfirm.children[0].children[0];
                        
                        if(passwordInput.value.length < 10 || passwordInput.value.length > 128){
                            setInputState(password, false, "Must be from 10 up to 128 characters long!");
                            passwordConfirmInput.value = "";
                            setTimeout(updateButton, 1);
                            setError();
                        }else if(!/[a-zA-Z]/.test(passwordInput.value) && !/[0-9]/.test(passwordInput.value)){
                            setInputState(password, false, "Must contain letters and numbers!");
                            passwordConfirmInput.value = "";
                            setTimeout(updateButton, 1);
                            setError();
                        }else if(!/[a-zA-Z]/.test(passwordInput.value)){
                            setInputState(password, false, "Must contain at least one letter!");
                            passwordConfirmInput.value = "";
                            setTimeout(updateButton, 1);
                            setError();
                        }else if(!/[0-9]/.test(passwordInput.value)){
                            setInputState(password, false, "Must contain at least one number!");
                            passwordConfirmInput.value = "";
                            setTimeout(updateButton, 1);
                            setError();
                        }else if(passwordConfirmInput.value != passwordInput.value){
                            setInputState(passwordConfirm, false, "Does not match the password!");
                            passwordConfirmInput.value = "";
                            setTimeout(updateButton, 1);
                            passwordConfirmInput.focus();
                            setError();
                        }

                        /*            if(!/^[A-Za-z0-9_]*$/.test(usernameInput.value)){
                            setInputState(username, false, "Can only contain letters, numbers, and underscores!");
                            setError();
                        }else if(!/[a-zA-Z]/.test(usernameInput.value)){
                            setInputState(username, false, "Must at least contain one letter!");
                            setError();*/

                        isDone();
                    }, function(){
                        loadAES(function(){
                            registerData.passwordHash = hash(password.children[0].children[0].value);
                            checkDataByOrder(3, function(error){
                                if(error){
                                    redoRegister(navigate);
                                }else{
                                    navigate("/user/register/personal");
                                }
                            });
                        });
                    });
                }} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}