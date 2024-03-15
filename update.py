import os
import time
import random

def commit():
    os.system('git add .')
    os.system('git commit -m "update"')
    os.system('git push origin master')
    
def main():
    while True:
        commit()
        time.sleep(random.randint(1, 100))
        
def psomic():
    pass

if __name__ == '__main__':
    main()
    