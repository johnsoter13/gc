#!/bin/sh

#Create encryted .env file  

if [[ -z "${ENC_PASS}" ]]; then
  echo "Env ENC_PASS is not set."
  read -s -p "Enter password to encrypt .env file, followed by [ENTER]:" enc_pass
else
  enc_pass="${ENC_PASS}"
fi

# creates an encrypted .env.enc file in project root dir
echo -e "\nEcrypting .env ..."
dotenvenc --encrypt $enc_pass
