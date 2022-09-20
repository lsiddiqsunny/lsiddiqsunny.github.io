import hashlib
def hashCompare(text):
    """
    Calculate the hash of the text using a common hash function and compare it
    """
    hash = hashlib.md5(text.encode()).hexdigest()
    if hash == "5f4dcc3b5aa765d61d8327deb882cf99":
        print("Hash matches!")
    else:
        print("Hash does not match!")
