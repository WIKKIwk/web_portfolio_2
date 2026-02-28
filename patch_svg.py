with open("public/voydod.svg", "r", encoding="utf-8") as f:
    text = f.read()

# Fix the broken SVG from the earlier bad python replace
# Remove double </g> </g> wrapping caused by syntax error if any
import re
text = re.sub(r'</g>\s*</g>\s*</g>\s*</g>', '</g>\n </g>', text)

with open("public/voydod.svg", "w", encoding="utf-8") as f:
    f.write(text)

