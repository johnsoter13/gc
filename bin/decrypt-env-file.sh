#!/bin/sh

#Create decrypted .env file 

if [[ -z "${ENC_PASS}" ]]; then
  echo "Env ENC_PASS is not set."
  read -s -p "Enter password to decrypt .env.enc file, followed by [ENTER]:" enc_pass
else
  enc_pass="${ENC_PASS}"
fi

# decrypts .env.enc and creates a .env file in project root dir
echo -e "\nDecrypting .env.enc ..."
dotenvenc --decrypt $enc_pass