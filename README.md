# Node.js SDK for Gameye

## Automated tests
Never commit something that breaks the build! You may prevent this a little bit
by linking the `test.sh` script as a git `pre-commit` hook!

like this:
```bash
ln test.sh .git/hooks/pre-commit
```

Now, before everey comit, your code will be compiled and linted!